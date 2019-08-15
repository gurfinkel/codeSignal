#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub splitByValue {
    my ($k, $elements) = @_;

    my $n = @$elements;
    my @result = (0)x$n;
    my $index = 0;

    foreach my $item (@$elements) {
        if ($k > $item) {
            $result[$index++] = $item;
        }
    }

    foreach my $item (@$elements) {
        if ($k <= $item) {
            $result[$index++] = $item;
        }
    }

    return \@result;
}
