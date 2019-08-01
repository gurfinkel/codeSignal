#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub htmlEndTagByStartTag {
    my ($startTag) = @_;

    my @result = ('</');
    my @store = split('', $startTag);
    my $c = 1;

    while (' ' ne $store[$c] && '>' ne $store[$c]) {
        push(@result, $store[$c++]);
    }

    push(@result, '>');

    return join('', @result);
}
