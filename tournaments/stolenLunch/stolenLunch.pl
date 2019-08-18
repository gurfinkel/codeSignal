#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub stolenLunch {
    my ($note) = @_;

    my @store = split('', $note);
    my $n = @store;
    my @result = (0)x$n;

    for (my $i = 0; $n > $i; ++$i) {
        my $item = $store[$i];
        if ('0' le $item && '9' ge $item) {
            $item = chr(ord($item) - ord('0') + ord('a'));
        } elsif ('a' le $item && 'j' ge $item) {
            $item = ord($item) - ord('a');
        }
        $result[$i] = $item;
    }

    return join('', @result);
}
