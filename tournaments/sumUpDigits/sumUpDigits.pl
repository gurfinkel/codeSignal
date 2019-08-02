#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub sumUpDigits {
    my ($inputString) = @_;

    my $result = 0;
    my @store = split('', $inputString);

    foreach my $item (@store) {
        if ('0' le $item && '9' ge $item) {
            $result += ord($item) - ord('0');
        }
    }

    return $result;
}
